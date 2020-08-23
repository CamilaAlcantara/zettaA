package com.zettaApp.apiZetta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zettaApp.apiZetta.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	@Query(value="select tb.* from TB_USUARIO tb " + 
			"WHERE ATIVO = True "
			+ " ORDER BY NOME ASC",nativeQuery = true)
	public List<Usuario> getListar();
	
}
