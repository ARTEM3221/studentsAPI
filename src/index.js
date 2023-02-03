import axios from 'axios'

new Vue({
  el: '#app',
  data() {
    return {
      students: [],
      newStudent: {
        name: '',
        group: '',
        mark: '',
        isDonePr: false
      },
      editingStudent: null
    }
  },
  mounted() {
    this.getStudents()
  },
  methods: {
    async getStudents() {
      const response = await axios.get('http://34.82.81.113:3000/students')
      this.students = response.data
    },
    async deleteStudent(_id) {
      await axios.delete(`http://34.82.81.113:3000/students/${_id}`) 
      this.getStudents() 
    }, 
    async addStudent() { 
      const response = await axios.post('http://34.82.81.113:3000/students', this.newStudent) 
      this.students.push(response.data) 
      this.newStudent = { name: '', group: '', mark: '', isDonePr: false } 
    }, 
    async updateStudent() { await axios.put(`http://34.82.81.113:3000/students/${this.editingStudent._id}`, this.editingStudent)
      this.getStudents()
      this.editingStudent = null
      },
      editStudent(student) {
      this.editingStudent = student
      },
      cancelEditing() {
      this.editingStudent = null
      }
      }
});