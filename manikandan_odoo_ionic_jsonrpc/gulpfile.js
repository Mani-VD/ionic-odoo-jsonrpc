var gulp = require("gulp");
var ts = require("gulp-typescript");
var project = ts.createProject("tsconfig.json");

gulp.task("default", function () { 
    return project.src()
        .pipe(project())
        .js.pipe(gulp.dest("."));
});