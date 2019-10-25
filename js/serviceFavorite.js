import { FavoriteBs } from "./favoriteBs";
import { get } from "https";

export class ServiceFavorite {
    constructor() {
        this.endPoint = 'https://api.thecatapi.com/v1/favourites';
        this.headers = {
            'x-api-key': 'DEMO-API-KEY',
            'Content-Type': 'application/json'
        };
    }

    //Get:favotites corresponding to one image
    getFavorites() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const getFavorites = fetch(this.endPoint, {
                    method: 'GET',
                    headers: {
                        "x-api-key": this.headers["x-api-key"]
                    }
                });
                getFavorites.then((response) => response.json())
                    .then((favorites) => resolve(favorites));
                getFavorites.catch((error) => reject(error));
            }, 5000);
        });
    };

    //Get:favotite corresponding to one image
    getFavorite(idFavorite) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const getFavorite = fetch(`${this.endPoint}/${idFavorite}`, {
                    method: 'GET',
                    headers: {
                        "x-api-key": this.headers["x-api-key"]
                    }
                });
                getFavorite.then((response) => response.json())
                    .then((favorite) => { resolve(favorite); });
                getFavorite.catch((error) => { reject(error); })
            }, 3000);
        });
    }

    //Post : A new favorite element 
    addFavorite(newFavorite) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const saveFavorite = fetch(this.endPoint, {
                    method: 'POST',
                    headers: {
                        "x-api-key": this.headers["x-api-key"],
                        'Content-Type': this.headers['Content-Type']
                    },
                    body: JSON.stringify({
                        "image_id": newFavorite.id,
                        "sub_id": newFavorite.sub
                    })
                });
                saveFavorite.then((response) => response.json())
                    .then((answer) => { resolve(answer) });
                saveFavorite.catch((error) => { reject(error) })
            }, 3000);
        })
    };

    //Delete: specific element as a favorite 
    deleteFavorite(idFavorite) {
        return new Promise((resolve, reject) => {
            const response = fetch(`${this.endPoint}/${idFavorite}`, {
                method: 'DELETE',
                headers: {
                    "x-api-key": this.headers["x-api-key"]
                }
            });
            response.then((response) => response.json())
                .then((answer) => resolve(answer));
            response.catch((error) => reject(error));
        });
    };
}