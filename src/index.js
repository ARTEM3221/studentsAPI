import { createApp } from 'vue'
import axios from 'axios'

const app = createApp({
data() {
return {
searchTerm: '',
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
computed: {
  filteredStudents() {
    return this.students.filter(student => student.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
},
methods: {
getStudents() {
axios.get('http://34.82.81.113:3000/students')
.then(response => {
this.students = response.data
})
},
deleteStudent(_id) {
axios.delete(`http://34.82.81.113:3000/students/${_id}`)
.then(() => {
this.getStudents()
})
},
addStudent() {
axios.post('http://34.82.81.113:3000/students', this.newStudent)
.then(response => {
this.students.push(response.data)
this.newStudent = { name: '', group: '', mark: '', isDonePr: false }
})
},
updateStudent() {
axios.put(`http://34.82.81.113:3000/students/${this.editingStudent._id}`, this.editingStudent)
.then(() => {
this.getStudents()
this.editingStudent = null
})
},
editStudent(student) {
this.editingStudent = student
},
cancelEditing() {
this.editingStudent = null
}
}
})

app.mount('#app')