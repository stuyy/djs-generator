var ProjectGenerator = /** @class */ (function () {
    function ProjectGenerator(projectName, framework, groups, events) {
        if (groups === void 0) { groups = [['test', 'test command']]; }
        if (events === void 0) { events = [['state', 'state events']]; }
        this.projectName = projectName;
        this.framework = framework;
        this.groups = groups;
        this.events = events;
    }
    return ProjectGenerator;
}());
var p1 = new ProjectGenerator('djs-1', true);
console.log(p1.projectName);
