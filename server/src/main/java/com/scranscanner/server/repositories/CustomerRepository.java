package com.scranscanner.server.repositories;

import com.scranscanner.server.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
