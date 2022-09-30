package com.scranscanner.service.repositories;

import com.scranscanner.service.models.DinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DinnerTableRepository extends JpaRepository<DinnerTable, Long> {
    List<DinnerTable> findBySizeGreaterThanEqual(int partySize);

}
