package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Booking;
import com.scranscanner.service.models.DinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Optional<Booking>> findByCustomerId(Long id);

}
