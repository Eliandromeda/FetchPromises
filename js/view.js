import { FavoriteBs } from './favoriteBs';

export class View {

    updateUI(dataHTML) {
        document.getElementById('result').innerHTML = dataHTML;
    };

    showContentAdd() {
        document.getElementById('result').innerHTML = '';
        document.getElementById('divadd').style.display = 'block';
    };

    HideContentAdd() {
        document.getElementById('divadd').style.display = 'block';
    };

    responseSaveFavorite(response){
        document.getElementById('result').innerHTML = response;
        document.getElementById('inputid').value='';
        document.getElementById('inputsub').value='';
    };

    responseDeleteFavorite(response){
        document.getElementById('result').innerHTML = response;
        document.getElementById('search').value='';
    };

    constructor() {
        document.getElementById("btnGetAll").addEventListener('click', async () => {
            const fab = new FavoriteBs();
            let favoritesHTML = await fab.getFavoritesBs();
            this.updateUI(favoritesHTML);
            this.HideContentAdd();
        });

        document.getElementById('btnsearch').addEventListener('click', async () => {
            const idFavorite = document.getElementById('favorite').value;
            const bsFavorite = new FavoriteBs();
            let favoriteHTML = await bsFavorite.getFavoriteBs(idFavorite);
            this.updateUI(favoriteHTML);
            this.HideContentAdd();
        });

        document.getElementById('btnnew').addEventListener('click', () => {
            this.showContentAdd();
        });

        document.getElementById('addnew').addEventListener('click',async () => {
            const idImage = document.getElementById('inputid').value;
            const idSub = document.getElementById('inputsub').value;
            let newFavorite = {
                "id": idImage,
                "sub": idSub
            };
            const bsFavorite = new FavoriteBs();
            let response = await bsFavorite.addFavorite(newFavorite);
            this.responseSaveFavorite(response);
        });

        document.getElementById('btndelete').addEventListener('click',async()=>{
            const idFavorite = document.getElementById('favorite').value;
            const bsFavorite=new FavoriteBs();
            let response =await bsFavorite.deleteFavorite(idFavorite);
            this.responseDeleteFavorite(response);
            this.HideContentAdd();
        })
    }
}