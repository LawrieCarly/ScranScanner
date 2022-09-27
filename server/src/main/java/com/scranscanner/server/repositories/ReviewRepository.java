package com.scranscanner.server.repositories;

import com.scranscanner.server.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
