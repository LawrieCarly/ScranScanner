package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {

    List<Availability> findByIsAvailableAndDinnerTablesRestaurantOrderByDateIgnoreCase(boolean isAvailable, Restaurant restaurant);



}
