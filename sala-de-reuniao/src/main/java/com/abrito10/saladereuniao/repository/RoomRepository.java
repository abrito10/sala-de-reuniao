package com.abrito10.saladereuniao.repository;

import com.abrito10.saladereuniao.model.Room;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer> {

}