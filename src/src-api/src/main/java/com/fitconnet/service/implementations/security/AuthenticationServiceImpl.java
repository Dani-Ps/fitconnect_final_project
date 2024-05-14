package com.fitconnet.service.implementations.security;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fitconnet.dto.entities.UserDTO;
import com.fitconnet.dto.requets.SignUp;
import com.fitconnet.dto.requets.Signin;
import com.fitconnet.dto.response.JwtAuthenticationDTO;
import com.fitconnet.enums.Role;
import com.fitconnet.persitence.model.User;
import com.fitconnet.persitence.repository.UserRepository;
import com.fitconnet.service.interfaces.security.AuthenticationServiceI;
import com.fitconnet.service.interfaces.security.JwtServiceI;

import lombok.AllArgsConstructor;
import lombok.Builder;

@Builder
@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationServiceI {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtServiceI jwtService;
	private final AuthenticationManager authenticationManager;
	/**
	 * Logger instance for ActivityController class.
	 */
	private final Logger logger = LoggerFactory.getLogger(AuthenticationServiceImpl.class);

	@Override
	public JwtAuthenticationDTO signup(SignUp request) {
		boolean emailExists = userRepository.existsByEmail(request.getEmail());
		if (emailExists) {
			throw new IllegalArgumentException("Email already in use.");
		}

		User user = new User();
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUsername());
		user.setEmail(request.getEmail());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.getRoles().add(Role.ROLE_USER);
		userRepository.save(user);

		String jwt = jwtService.generateToken(user);
		return JwtAuthenticationDTO.builder().token(jwt).build();
	}

	@Override
	public JwtAuthenticationDTO signin(Signin request) {

		String identifier = request.getIdentifier();
		boolean isEmail = identifier.contains("@");
		User user = new User();

		logger.info("AuthenticationServiceImpl - signin - IDENTIFIER: " + identifier);

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(identifier, request.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		if (!isEmail) {
			user = userRepository.findByUsername(identifier)
					.orElseThrow(() -> new IllegalArgumentException("Invalid username or password."));
			logger.info("AuthenticationServiceImpl - signin - BUSCANDO POR USER");

		} else {
			user = userRepository.findByEmail(request.getIdentifier())
					.orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
			logger.info("AuthenticationServiceImpl - signin - BUSCANDO POR EMAIL");

		}

		String jwt = jwtService.generateToken(user);

		return JwtAuthenticationDTO.builder().token(jwt).build();
	}

	@Override
	public JwtAuthenticationDTO createUser(UserDTO request, Role rol) {
		boolean emailExists = userRepository.existsByEmail(request.getEmail());
		if (emailExists) {
			throw new IllegalArgumentException("Email already in use.");
		}
		User user = setAttibutesFromDtoToUser(request, rol);

		userRepository.save(user);

		String jwt = jwtService.generateToken(user);
		return JwtAuthenticationDTO.builder().token(jwt).build();

	}

	@Override
	public User setAttibutesFromDtoToUser(UserDTO request, Role rol) {
		User user = new User();
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setUsername(request.getUserName());
		user.setEmail(request.getEmail());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		Set<Role> roles = new HashSet<>();
		if (rol.equals(Role.ROLE_USER)) {
			roles.add(Role.ROLE_USER);
		} else {
			roles.add(Role.ROLE_ADMIN);
		}
		return user;
	}

}
