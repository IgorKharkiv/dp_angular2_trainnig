"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MovieService = (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovies = function () {
        return [
            {
                hero: 'Celeritas',
                imageurl: 'images/hero.png',
                movieId: 1,
                mpaa: 'pg-13',
                releaseDate: '2015-12-19T00:00:00',
                title: 'Celeritas Reigns',
                price: 12.95,
                starRating: 4.925,
                approvalRating: .97
            },
            {
                hero: 'Mr. Nice',
                imageurl: 'images/villain.png',
                movieId: 2,
                mpaa: 'pg-13',
                releaseDate: '2015-12-18T00:00:00',
                title: 'No More Mr. Nice Guy',
                price: 14.95,
                starRating: 4.6,
                approvalRating: .94
            },
            {
                hero: 'Angular',
                imageurl: 'images/ng-logo.png',
                movieId: 3,
                mpaa: 'pg-13',
                releaseDate: '2015-12-17T00:00:00',
                title: 'Angular to the Rescue',
                price: 15.95,
                starRating: 4.98,
                approvalRating: .9995
            }
        ];
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable()
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map