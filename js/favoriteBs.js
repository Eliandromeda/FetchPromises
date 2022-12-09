import { ServiceFavorite } from './serviceFavorite';

export class FavoriteBs {

    getTenData(favorites) {
        let htmlFavorites = favorites.slice(0, 9)
            .map((favorites) => {
                return `<div>${favorites.id} ${favorites.created_at} ${favorites.image.id} ${favorites.image.url}</div>`;
            });
        return htmlFavorites;
    };

    buildHtmlFavorite(favorite) {
        console.log('sss');
        return `<div>${favorite.id} ${favorite.user_id} ${favorite.image_id} ${favorite.sub_id}</div>`;
    };

    responseSaveFavorite(response) {
        return `<div>${response.id} ${response.message}</div>`;
    };

    responseDeleteFavorite(response) {
        return `<div>${response.message}</div>`;
    }

    async getFavoritesBs() {
        const service = new ServiceFavorite();
        let bsFavorites = await service.getFavorites();
        return this.getTenData(bsFavorites);;
    };

    async getFavoriteBs(idFavorite) {
        const service = new ServiceFavorite();
        let bsFavorite = await service.getFavorite(idFavorite);
        return this.buildHtmlFavorite(bsFavorite);
    }

    async addFavorite(newFavorite) {
        const service = new ServiceFavorite();
        let response = await service.addFavorite(newFavorite);
        return this.responseSaveFavorite(response);
    }

    async deleteFavorite(idFavorite) {
        const service = new ServiceFavorite();
        let response = await service.deleteFavorite(idFavorite);
        return this.responseDeleteFavorite(response);
    }
}
