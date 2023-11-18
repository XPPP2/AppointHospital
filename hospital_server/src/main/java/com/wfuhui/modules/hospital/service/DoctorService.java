package com.wfuhui.modules.hospital.service;

import com.wfuhui.modules.hospital.entity.DoctorEntity;

import java.util.List;
import java.util.Map;

/**
 * 医生
 * 
 * @author lizhengle
 * @email 2803180149@qq.com
 * @date 2021-01-11 21:15:29
 */
public interface DoctorService {
	
	DoctorEntity queryObject(Integer id);
	
	List<DoctorEntity> queryList(Map<String, Object> map);
	
	int queryTotal(Map<String, Object> map);
	
	void save(DoctorEntity doctor);
	
	void update(DoctorEntity doctor);
	
	void delete(Integer id);
	
	void deleteBatch(Integer[] ids);
}
