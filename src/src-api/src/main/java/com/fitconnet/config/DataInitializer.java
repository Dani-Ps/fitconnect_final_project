package com.fitconnet.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.fitconnet.persitence.repository.ActivityRepository;
import com.fitconnet.persitence.repository.UserRepository;
import com.github.javafaker.Faker;

import lombok.AllArgsConstructor;

@Profile("demo")
@Component
@AllArgsConstructor
public class DataInitializer implements CommandLineRunner {

	static final boolean DELETE_USER = true;

	private final UserRepository userRepository;

	private final ActivityRepository activityRepository;

	private final PasswordEncoder passwordEncoder;

	private final Faker faker;

	private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

	@Override
	public void run(String... args) throws Exception {

		try {
			/*
			 * User admin = new User(); admin.setName("bustaAdmin");
			 * admin.setEmail("admin@admin.com"); admin.setAge(20);
			 * admin.setPassword(passwordEncoder.encode("admin"));
			 * admin.getRoles().add(Role.ROLE_ADMIN); userRepository.save(admin); User both
			 * = new User(); both.setName("user"); both.setEmail("user@user.com");
			 * both.setAge(20); both.setPassword(passwordEncoder.encode("user"));
			 * both.getRoles().add(Role.ROLE_USER); userRepository.saveAndFlush(both);
			 * 
			 * List<User> users = new ArrayList<>();
			 * 
			 * // Crear 20 usuarios con edades aleatorias entre 18 y 80 for (int i = 0; i <
			 * 20; i++) { User user = new User(); user.setName(faker.name().firstName());
			 * user.setEmail(faker.internet().emailAddress());
			 * user.setAge(faker.number().numberBetween(60, 80));
			 * user.setPassword(passwordEncoder.encode(faker.internet().password()));
			 * user.getRoles().add(Role.ROLE_USER); users.add(user); }
			 * 
			 * // Crear 20 usuarios con edad 45 for (int i = 0; i < 20; i++) { User user =
			 * new User(); user.setName(faker.name().firstName());
			 * user.setEmail(faker.internet().emailAddress());
			 * user.setAge(faker.number().numberBetween(18, 24));
			 * user.setPassword(passwordEncoder.encode(faker.internet().password()));
			 * user.getRoles().add(Role.ROLE_USER); users.add(user); }
			 * 
			 * // Crear 20 usuarios con edad 29 for (int i = 0; i < 20; i++) { User user =
			 * new User(); user.setName(faker.name().firstName());
			 * user.setEmail(faker.internet().emailAddress());
			 * user.setAge(faker.number().numberBetween(35, 50));
			 * user.setPassword(passwordEncoder.encode(faker.internet().password()));
			 * user.getRoles().add(Role.ROLE_USER); users.add(user); } for (int i = 0; i <
			 * 30; i++) { User user = new User(); user.setName(faker.name().firstName());
			 * user.setEmail(faker.internet().emailAddress());
			 * user.setAge(faker.number().numberBetween(25, 90));
			 * user.setPassword(passwordEncoder.encode(faker.internet().password()));
			 * user.getRoles().add(Role.ROLE_USER); users.add(user); }
			 * 
			 * // Guardar usuarios en el repositorio for (User user : users) {
			 * userRepository.save(user); }
			 */

		} catch (Exception e) {
			String error = e.getMessage();
			logger.info(error);
		}

	}
}