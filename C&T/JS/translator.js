
var idiom = 'spanish';

function toggleIdiom(){

    if(idiom === 'spanish'){
        idiom = 'english';
    }
    else if(idiom === 'english'){
        idiom = 'spanish';;
    }
    
    if(idiom === 'spanish'){
        location.reload();
    }
    if(idiom === 'english'){
        document.querySelector('#main_box-1 h2').textContent = 'Understand. Support. Resolve.';
        
        
        /* Nav */
        translate(' #btn_idiom', 'See in spanish');


        /* Titulos de secciones nav */
        translate('#btn_areas', 'Practice Areas');
        translate('#btn_team', 'Our Team');
        translate('#btn_post', 'Posts');
        translate('#btn_contact', 'Contact Us');

        /* Otros */

        translate('#about_text', 
            "'CYT Abogados' was founded by young professionals, highly trained and experienced in various areas of the legal profession, providing services to both individuals and companies, with a service vocation and results orientation. With continuous and permanent training, we seek to advise our clients by working closely and offering added value with technical quality in the study's practice areas."
        );
         /* cambiar areas */
         translate('#info_box-section-title', 'Practice Areas');
         translate('#area_title1', 'Business Economic');
         translate('#a1', '✔Advice to Fintech companies, entrepreneurs and StartUps');
         translate('#a2', '✔General advice on business law');
         translate('#a3', '✔complexity litigation');
         translate('#a4', '✔commercial contracts');
         translate('#a5', '✔Financing and development of new businesses');
         translate('#a6', '✔Restructuring of liabilities and bankruptcy processes');

         translate('#area_title2', 'labor law'); 
         translate('#b1', '✔Development of global plans to reduce litigation in the company');
         translate('#b2', '✔Measures to strengthen the control of absenteeism and work licenses');
         translate('#b3', '✔ Representation and legal sponsorship in litigious matters');
         translate('#b4', '✔Consulting in individual and collective labor law');
         translate('#b5', '✔Labor aspects of Immigration Law');
         translate('#b6', '✔Layoffs and occupational diseases');

         translate('#area_title3', 'civil and commercial'); 
         translate('#c1', '✔Consumer defense and commercial loyalty');
         translate('#c2', '✔Individual and collective litigation');
         translate('#c3', '✔Claims and assistance to extrajudicial hearings');
         translate('#c4', '✔Management of massive claims portfolio');
         translate('#c5', '✔Consulting on internal conflict mitigation plans');

         translate('#area_title4', 'Corporate'); 
         translate('#d1', '✔We advise both national and international clients in the creation and daily monitoring of corporate structures, to carry out their daily corporate affairs and their own line of business');

         translate('#area_title5', 'Academy and consultancy');
         translate('#d2', '✔We provide advice and consultancy from workshops, courses and classes on the subjects of our specialty');

         translate('#area_title6', 'Normative compliance');
         translate('#d3', '✔Development of the Compliance program, implementation of tools and elements in business integrity programs');  
         
         /*cambiar publicaciones*/
         translate('#post_1 h2', 'New degree obtained - Ethics and Compliance Initiative');
         translate('#post_1 p', 'New degree obtained - Ethics and Compliance Initiative');
         
         translate('#post_2 h2', 'Competition Law (27,442)');
         translate('#post_2 p', 'Some practical considerations for your understanding, in light of recent regulations');
         
         translate('#post_3 h2', 'Analysis of the ruling of the Supreme Court "Editorial Río Negro SA"');
         translate('#post_3 p', 'In a brief jurisprudential elaboration, due to the considerations that [...]');
 
         translate('#post_1 a', 'SEE');
         translate('#post_2 a', 'SEE');
         translate('#post_3 a', 'SEE');
           
         
         /*cambiar equipo*/
         translate('#team_box-team-title', 'Team'); 
         translate('#p-equipo1', 'Lawyer from the University of Buenos Aires, honors diploma and academic merit award.Dr. Cosso is a specialist in business law and has completed various training courses in the areas of commercial litigation and labor law, as well as being an active member of legal research institutes at the University of Buenos Aires. Author of various publications, in 2018 he finished the Premaster at the Universidad Austral with one of the highest academic averages. In 2020 he completed his studies in the Master s Degree in Economic Business Law from the Universidad Católica Argentina.'); 
         translate('#p-equipo2', 'Lawyer from the National University of Cuyo (2016).Specialist in family law and wealth management.'); 
         translate('#p-equipo3', 'Advanced student of the Faculty of Law and Social Sciences of the University of Buenos Aires (UBA), with orientation in business law.'); 
         translate('#p-equipo4', 'Associate consultant: Lawyer (UNSAM), honors diploma and academic merit award, focused on private law. Assistant and speaker at numerous congresses and conferences, he currently works as of counsel in matters of his specialty.');
         translate('#p-equipo5', 'Accountant (UB), specialist in accounting and tax advice together with the Payroll area. In charge of tax planning and consulting.');

         
         
         /*cambiar asociaciones */
         translate('#assoc_box-assoc-title', 'Associations'); 
         
         /*cambiar contactos */
         translate('#form-t', 'Send us a message'); 
         translate('#form-nombre', 'Name:'); 
         translate('#form-correo', 'Email:'); 
         translate('#form-cel', 'Cellphone number:'); 
         translate('#form-mensaje', 'Message:'); 
        // Obtén el elemento del botón por su ID
        var botonElement = document.getElementById("form-boton");
        // Cambia el valor del botón
         botonElement.value = "Send us a message";
     


          /*cambiar acerca */
          translate('#about_box-about-title', 'About us');

         
        
         
        
          
         
         

        
    }
}

function translate(elementSelected, translation){
    document.querySelector(elementSelected).textContent = translation;
}


