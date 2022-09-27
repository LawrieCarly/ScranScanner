package com.scranscanner.server.repositories;

import com.scranscanner.server.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
