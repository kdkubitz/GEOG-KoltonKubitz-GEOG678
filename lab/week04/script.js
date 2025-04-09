function findTopLeft(pointList) { // Max Lat and Min Lon

    var maxLat = null
    var minLon = null

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat) {
                    maxLat = point.lat
                }
                if (point.lon < minLon) { 
                    minLon = point.lon
                }
            }
        }
    )
    return {"pointID": 1, "lat": maxLat, "lon": minLon}
}

function findTopRight(pointList) { // Max Lat and Max Lon

    var maxLat = null
    var maxLon = null

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat > maxLat) {
                    maxLat = point.lat
                }
                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )
    return {"pointID": 2, "lat": maxLat, "lon": maxLon}
}

function findBottomLeft(pointList) { // Min Lat and Min Lon

    var minLat = null
    var minLon = null

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat < minLat) {
                    minLat = point.lat
                }
                if (point.lon < minLon) {
                    minLon = point.lon
                }
            }
        }
    )
    return {"pointID": 3, "lat": minLat, "lon": minLon}
}

function findBottomRight(pointList) { // Min Lat and Max Lon

    var minLat = null
    var maxLon = null

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat < minLat) {
                    minLat = point.lat
                }
                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )
    return {"pointID": 3, "lat": minLat, "lon": maxLon}
}

function Run() {

    var topLeftPoint = findTopLeft(theJSON)
    var topRightPoint = findTopRight(theJSON)
    var bottomLeftPoint = findBottomLeft(theJSON)
    var bottomRightPoint = findBottomRight(theJSON)
 
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    }
    console.log("Bounding box computed for kdkubitz@tamu.edu: ")
    console.log(boundingBox)
}