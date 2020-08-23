package com.zettaApp.apiZetta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zettaApp.apiZetta.models.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Long>{

	@Query(value="select tb.* from TB_PERFIL tb " + 
			"WHERE ATIVO = True",nativeQuery = true)
	public List<Perfil> getListar();
}
