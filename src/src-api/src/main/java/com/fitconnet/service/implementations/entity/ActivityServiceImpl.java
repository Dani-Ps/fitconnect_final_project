package com.fitconnet.service.implementations.entity;

import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Consumer;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.fitconnet.dto.entities.ActivityDTO;
import com.fitconnet.dto.entities.ImageDTO;
import com.fitconnet.dto.entities.UserDTO;
import com.fitconnet.error.exception.activity.ActivityNotFoundException;
import com.fitconnet.persitence.model.Activity;
import com.fitconnet.persitence.model.ActivityImg;
import com.fitconnet.persitence.model.User;
import com.fitconnet.persitence.repository.ActivityRepository;
import com.fitconnet.service.interfaces.entity.ActivityServiceI;
import com.fitconnet.service.interfaces.entity.ImageServiceI;
import com.fitconnet.service.interfaces.entity.UserServiceI;
import com.fitconnet.utils.Constants;

import jakarta.validation.ConstraintViolationException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ActivityServiceImpl implements ActivityServiceI {

	private final ActivityRepository activityRepository;
	private final UserServiceI userService;
	private final ImageServiceI imageService;

	@Override
	public List<ActivityDTO> getAll() {
		return activityRepository.findAll().stream().map(this::activityToActivityDTO).toList();
	}

	@Override
	public ActivityDTO getOne(Long id) {
		Activity response = activityRepository.findById(id)
				.orElseThrow(() -> new ActivityNotFoundException(Constants.ACTIVITY_NOT_FOUND, HttpStatus.NOT_FOUND));
		return activityToActivityDTO(response);
	}

	@Override
	public void create(ActivityDTO activity) {
		activityRepository.save(activityDTOtoActivity(activity));
	}

	@Override
	public void update(Long id, ActivityDTO activity) {
		if (!activityRepository.findById(id).isPresent()) {
			throw new ActivityNotFoundException(Constants.ACTIVITY_NOT_FOUND, HttpStatus.NOT_FOUND);
		}

		activityRepository.save(activityDTOtoActivity(activity));
	}

	@Override
	public void patch(Long id, ActivityDTO activity) {
		Activity aux = activityRepository.findById(id)
				.orElseThrow(() -> new ActivityNotFoundException("Activity not found", HttpStatus.NOT_FOUND));
		updateFieldIfDifferent(aux, activity.getType(), "type", aux::setType);
		updateFieldIfDifferent(aux, activity.getDuration(), "duration", aux::setDuration);
		updateFieldIfDifferent(aux, activity.getPlace(), "place", aux::setPlace);
		updateFieldIfDifferent(aux, activity.getParticipants().stream().map(userService::userDTOtoUser).toList(),
				"participants", aux::setParticipants);
		updateFieldIfDifferent(aux, activity.getDate(), "date", aux::setDate);
	}

	@Override
	public void deleteById(Long id) {
		if (!activityRepository.findById(id).isPresent()) {
			throw new ActivityNotFoundException(Constants.ACTIVITY_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		activityRepository.deleteById(id);

	}

	@Override
	public boolean existById(Long id) {
		return activityRepository.existsById(id);
	}

	@Override
	public boolean existByDate(Date date) {
		return activityRepository.existByDate(date);
	}

	@Override
	public Activity activityDTOtoActivity(ActivityDTO activityDTO) {
		Activity activity = new Activity();
		activity.setType(activityDTO.getType());
		activity.setDuration(activityDTO.getDuration());
		activity.setPlace(activityDTO.getPlace());
		activity.setDate(activityDTO.getDate());
		activity.setLikes(activityDTO.getLikes());
		activity.setCreator(userService.userDTOtoUser(activityDTO.getCreator()));
		activity.setParticipants(participantsDTOtoParticipants(activityDTO.getParticipants()));
		ActivityImg activityImg = imageService.imageDTOToActivityImg(activityDTO.getActivityImg(), activity);
		activity.setImage(activityImg);
		return activity;

	}

	@Override
	public ActivityDTO activityToActivityDTO(Activity activity) {
		ActivityDTO dto = new ActivityDTO();
		dto.setCreator(userService.userToUserDTO(activity.getCreator()));
		dto.setDate(activity.getDate());
		dto.setDuration(activity.getDuration());
		dto.setParticipants(participantstoParticipantsDTO(activity.getParticipants()));
		dto.setPlace(activity.getPlace());
		dto.setType(activity.getType());
		dto.setLikes(activity.getLikes());
		ImageDTO imageDTO = imageService.activityImgToImageDTO(activity.getImage());
		dto.setActivityImg(imageDTO);
		return dto;
	}

	@Override
	public List<User> participantsDTOtoParticipants(List<UserDTO> partipantsDTO) {

		List<User> participats = new ArrayList<>();

		for (UserDTO dto : partipantsDTO) {

			userService.userDTOtoUser(dto);
		}

		return participats;
	}

	@Override
	public List<UserDTO> participantstoParticipantsDTO(List<User> partipants) {

		List<UserDTO> partipantsDTO = new ArrayList<>();

		for (User user : partipants) {

			userService.userToUserDTO(user);
		}

		return partipantsDTO;
	}

	private <T> void updateFieldIfDifferent(Activity activity, T newValue, String fieldName, Consumer<T> setter) {
		T existingValue = getFieldValue(activity, fieldName);
		if (newValue != null && !newValue.equals(existingValue)) {
			try {
				setter.accept(newValue);
			} catch (ConstraintViolationException e) {
				throw new InvalidParameterException("El valor para '" + fieldName + "' no es válido.");
			}
		}
	}

	private <T> T getFieldValue(Activity activity, String fieldName) {
		switch (fieldName) {
		case "type":
			return (T) activity.getType();
		case "duration":
			return (T) activity.getDuration();
		case "place":
			return (T) activity.getPlace();
		case "participants":
			return (T) activity.getParticipants();
		case "date":
			return (T) activity.getDate();
		default:
			throw new IllegalArgumentException("Campo desconocido: " + fieldName);
		}
	}

}