import axios from 'axios';
import Swal from 'sweetalert2';

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
      software_programs: info?.q3.toString(),
      linkedin_link: info?.q5,
      english_level: info?.q4,
      resume_file: info?.q6,
      what_do_you_know_about_shell: info?.q7,
      have_you_applied_before: info?.q8,
      previous_apply_subteam: info?.q9,
      expected_gain_joining_the_team: info?.q10,
      why_perfect_candidate: info?.q11,
      part_of_student_activities: info?.q12,
      student_activity_name_role: info?.q14,
      hours_given: info?.q13,
    })
    .then((response) => {
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'We will contact you ',
        showConfirmButton: false,
        timer: 3000,
      });
      if (response.status === 401) {
        window.location.pathname = 'login';
      }
      setTimeout(() => {
        document.location.href = './';
      }, 3000);
    }).catch((error) => {
      console.log(error);
      alert(`${error?.response?.data}\n`);
    });
};
