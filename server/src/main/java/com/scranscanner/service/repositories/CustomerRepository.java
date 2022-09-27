package com.scranscanner.service.repositories;

import com.scranscanner.service.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
