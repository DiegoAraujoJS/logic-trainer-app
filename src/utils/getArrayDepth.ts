export default function getArrayDepth(array: any[] | any): number {
    if (!Array.isArray(array)) {
        return 0
    } else {
        if (array.length === 0) return 0
        const map_to_depths = array.map(member => getArrayDepth(member))
        return 1 + map_to_depths.sort((a, b) => a - b)[map_to_depths.length - 1]
    }
}
