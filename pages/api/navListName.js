import navlist from './navList.json'

export default (req, res) => {
    res.status(200).json(navlist)
}