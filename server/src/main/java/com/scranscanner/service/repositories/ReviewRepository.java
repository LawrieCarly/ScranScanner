package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Booking;
import com.scranscanner.service.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Optional<Review>> findByRestaurantId(Long id);

}
