package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {

    @Query(value = "SELECT * FROM availabilities INNER JOIN dinner_tables ON dinner_table_id=dinner_tables.id INNER JOIN restaurants ON restaurant_id=restaurants.id WHERE is_available=true AND restaurant_id=?1 AND size>=?2 AND date=?3 AND time>=?4 ORDER BY time ASC", nativeQuery = true)
    List<Availability> findAvailableTablesByRestaurantNative(Long restaurantId, Integer partySize, LocalDate date, LocalTime time);


@Query(value = "SELECT * FROM availabilities INNER JOIN dinner_tables ON dinner_table_id=dinner_tables.id INNER JOIN restaurants ON restaurant_id=restaurants.id WHERE is_available=true AND restaurant_id=?1 AND date>=?2 ORDER BY date ASC LIMIT 45", nativeQuery = true)
    List<Availability> findAllAvailableTablesByRestaurantNative(Long restaurantId, LocalDate date);


}
