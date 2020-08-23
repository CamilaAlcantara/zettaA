package com.zettaApp.apiZetta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zettaApp.apiZetta.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

	@Query(value="select tb.id, tb.nome, tb.sexo, tb.cpf, to_char( tb.data_nascimento, 'DD-mm-YYYY') as data_nascimento, ativo from TB_PESSOA tb " + 
			"WHERE ATIVO = True",nativeQuery = true)
	public List<Pessoa> getListar();
}
