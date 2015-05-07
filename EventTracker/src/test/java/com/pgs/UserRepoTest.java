//package com.pgs;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//import com.pgs.model.User;
//import com.pgs.repo.UserRepository;
//import com.pgs.utils.PasswordHasher;
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = {DataSoruceConfig.class, JpaConfig.class})
//public class UserRepoTest {
//
//	@Autowired
//	private UserRepository userRepo;
//	
//	@Test
//	public void findAll(){
//		userRepo.findAll();
//	}
//	
//	@Test
//	public void save(){
//		User user = new User();
//		user.setUsername("test");
//		user.setPassword(PasswordHasher.hash("test"));
//		userRepo.save(user);
//	}
//}
