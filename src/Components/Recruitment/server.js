import axios from 'axios';

export const Register = (info) => {
  axios
    .post('https://cuert-backend-api.herokuapp.com/members/apply/new/', {
      name: info?.name,
      email: info?.email,
      phone: info?.phone,
      whatsapp_number: info?.whatsApp,
      grad_year: info?.graduationYear,
      university: info?.faculty,
      department: info?.major,
      subteam: info?.q0,
      subteam_reason: info?.q1,
      previous_activities: info?.q2,
      // software_programs:info?. ====================>q3 array q4 others string
      linkedin_link: info?.q6,
      english_level: info?.q5,
      resume_file: info?.q7,
      what_do_you_know_about_shell: info?.q8,
      have_you_applied_before: info?.q9,
      previous_apply_subteam: info?.q10,
      expected_gain_joining_the_team: info?.q11,
      why_perfect_candidate: info?.q12,
      part_of_student_activities: info?.q13,
      student_activity_name_role: info?.q15,
      hours_given: info?.q14,
    })
    .then((res) => {
      console.log(res);
      console.log('fffffffffff');
    })
    .catch((error) => {
      console.log(error);
    });
};
