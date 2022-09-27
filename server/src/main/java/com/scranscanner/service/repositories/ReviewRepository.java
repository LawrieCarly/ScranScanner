package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
