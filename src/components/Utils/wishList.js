
const getWishList=()=>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const wishList = JSON.parse(storedWishListStr);
        return wishList;
    }else{
        return[];
    }
}


const setWishList =(id)=>{
    const storedWishList = getWishList();
    if(storedWishList.includes(id)){
        alert("allready added in wish list");
    }else{
        storedWishList.push(id);
        const storedListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list',storedListStr);
    }
}

export default setWishList;