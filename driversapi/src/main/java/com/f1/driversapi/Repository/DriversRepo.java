package com.f1.driversapi.Repository;

import com.f1.driversapi.Entity.Drivers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DriversRepo extends JpaRepository<Drivers , Long> {
    List<Drivers> findByName(String name);
    List<Drivers> findByTeam(String team);


    @Query("SELECT d FROM Drivers d WHERE d.points BETWEEN ?1 AND ?2")
    List<Drivers> getPointsRange(double low, double high);

    List<Drivers>findByPointsGreaterThan(double points);
    List<Drivers> findByNationality(String nationality);





}
