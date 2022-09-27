package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
