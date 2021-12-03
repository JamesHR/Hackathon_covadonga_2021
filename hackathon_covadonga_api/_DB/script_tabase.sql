/**
 * -----------------------------------------------------------------------------
 * -------------- CREACIÓN DE LA BASE DE DATOS ---------------------------------
 * -----------------------------------------------------------------------------
 */
create database if not exist hospital;

use Hospital;


/**
 * -----------------------------------------------------------------------------
 * --------------- CREACIÓN DE LAS TABLAS --------------------------------------
 * -----------------------------------------------------------------------------
 */
create table patients(
	  id_patients int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, curp varchar(19)
	, name varchar(40)
	, last_name varchar(40)
	, last_surname varchar(40)
	, address text
	, mail varchar(50)
	, password text
);

create table expedients(
	  id_expedient int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, id_patients int 		# foraing key of patients
	, create datetime 
);

create table allergies(
	  id_allergy int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, id_expedient int 		# Foraing key of expedients
	, name varchar(50)
	, observatiosn text
);

create table visits(
	  id_visit int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, id_patient int 		# Foraing key of patients
	, id_visit_status int  	# Foraing key of Statuses 
	, visit_date date
	, reason text  
);

create table visit_statuses(
	  id_visit_status int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, name text 
);

create table expedient_illnesses(
	  id_exp_illness int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, id_expedient int 		# Foraing key of expedients
	, id_illness int 		# Foraing key of illnesses
	, observations text
);

create table illnesses(
	  id_illness int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, name text
);

create table clerks(
	  id_clerk int PRIMARY KEY NOT NULL AUTO_INCREMTEN
	, name varchar(50)
	, last_name varchar(100)
	, last_surname varchar(100)
	, email text
	, password text
);


/**
 * -----------------------------------------------------------------------------
 * -------------- CREACIÓN DE LAS LLAVEZ FORANEAS ------------------------------
 * -----------------------------------------------------------------------------
 */


ALTER TABLE expedients
	ADD FOREIGN KEY (id_patients) REFERENCES patients(id_patients);

ALTER TABLE allergies
	ADD FOREIGN KEY (id_expedient) REFERENCES expedients(id_expedient);


ALTER TABLE visits
	ADD FOREIGN KEY (id_patient) REFERENCES patients(id_patients);

ALTER TABLE visits
	ADD FOREIGN KEY (id_visit_status) REFERENCES visit_statuses(id_visit_status);


ALTER TABLE expedient_illnesses
	ADD FOREIGN KEY (id_expedient) REFERENCES expedients(id_expedient);

ALTER TABLE expedient_illnesses
	ADD FOREIGN KEY (id_illness) REFERENCES illnesses(id_illness);















