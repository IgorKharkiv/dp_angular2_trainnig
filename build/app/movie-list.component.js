"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var MovieListComponent = (function () {
    function MovieListComponent(movieService) {
        this.showImage = false;
        this.movies = movieService.getMovies();
    }
    MovieListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    MovieListComponent.prototype.checkMovieHero = function (value) {
        return this.movies.filter(function (movie) { return movie.hero === value; }).length > 0;
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movie-list',
        templateUrl: './movie-list.component.html',
        styleUrls: ['./movie-list.component.css'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof movie_service_1.MovieService !== "undefined" && movie_service_1.MovieService) === "function" && _a || Object])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
var _a;
//# sourceMappingURL=movie-list.component.js.map