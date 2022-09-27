package com.scranscanner.server.repositories;

import com.scranscanner.server.models.DinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DinnerTableRepository extends JpaRepository<DinnerTable, Long> {
}
