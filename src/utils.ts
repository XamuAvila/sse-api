function getUniqueId() : string{
    return Date.now() + '-' + Math.floor(Math.random() * 1000000000);
}

export default getUniqueId;

