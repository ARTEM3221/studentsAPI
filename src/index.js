
var app = new Vue({
  el: '#app',
  data() {
    return {
      searchTerm: '',
      students: [
        { id: 1, fullName: 'John Doe', group: 'A', yearOfBirth: 2000, passed: true },
        { id: 2, fullName: 'Jane Doe', group: 'B', yearOfBirth: 2002, passed: false },
        { id: 3, fullName: 'Jim Smith', group: 'A', yearOfBirth: 1999, passed: true }
      ],
      newStudent: {
        fullName: '',
        group: '',
        yearOfBirth: '',
        passed: false
      }
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => student.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
  },
  methods: {
    deleteStudent(id) {
      const index = this.students.findIndex(student => student.id === id)
      this.students.splice(index, 1)
    },
    addStudent() {
      const newId = this.students.length ? this.students[this.students.length - 1].id + 1 : 1
      this.students.push({ ...this.newStudent, id: newId })
      this.newStudent = { fullName: '', group: '', yearOfBirth: '', passed: false }
    }
  }
});