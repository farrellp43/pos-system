const toRibuan = (value: number) => {
    const num = value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    return "Rp" + num;
};

export default toRibuan;