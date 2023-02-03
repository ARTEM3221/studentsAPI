import Vue from 'vue'
import axios from 'axios'
var app = new Vue({
  el: '#app',
  data() {
    return {
      students: [],
      newStudent: {
        fullName: '',
        group: '',
        yearOfBirth: '',
        passed: false
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
    async deleteStudent(id) {
      await axios.delete(`http://34.82.81.113:3000/students/${id}`) 
      this.getStudents() 
    }, 
    async addStudent() { 
      const response = await axios.post('http://34.82.81.113:3000/students', this.newStudent) 
      this.students.push(response.data) 
      this.newStudent = { fullName: '', group: '', yearOfBirth: '', passed: false } 
    }, 
    async updateStudent() { await axios.put(`http://34.82.81.113:3000/students/${this.editingStudent.id}`, this.editingStudent)
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