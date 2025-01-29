function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    getSkills() {
      return this.skills;
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
  };
}