package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query(value="SELECT * FROM restaurants INNER JOIN dinner_tables ON restaurants.id=dinner_tables.restaurant_id INNER JOIN availabilities ON dinner_tables.id=availabilities.dinner_table_id WHERE is_available=true AND size>=?1 AND date=?2 AND time>=?3", nativeQuery = true)
    List<Restaurant> findFilteredRestaurants(Integer partySize, LocalDate date, LocalTime time);

}
