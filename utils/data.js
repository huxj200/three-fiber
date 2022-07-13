// eslint-disable-next-line no-unused-vars
import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'John',
            email: 'huxj@qq.com',
            password: bcrypt.hashSync('admin'),
        },
    ],
    "data": [
        {
            "id": 1,
            "attributes": {
                "name": "CarBody",
                "modelurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.gltf",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.png",
                'image': '/pictureModel/picture1.png',
                "createdAt": "2022-07-10T10:43:36.377Z", "updatedAt": "2022-07-10T10:43:48.347Z",
                "publishedAt": "2022-07-10T10:43:48.344Z",
                "slug": "DT-00-01"
            }
        },
        {
            "id": 2,
            "attributes": {
                "name": "TransShaft",
                "modelurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/TransShaft.gltf",
                "imgurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/TransShaft.png",
                'image': '/pictureModel/picture2.png',
                "createdAt": "2022-07-10T10:44:43.196Z", "updatedAt": "2022-07-10T10:44:43.789Z",
                "publishedAt": "2022-07-10T10:44:43.787Z",
                "slug": "DT-00-02"
            }
        },
        {
            "id": 3, "attributes": {
                "name": "bingdundun",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/bingdundun.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/bingdundun.png",
                'image': '/pictureModel/picture3.png',
                "createdAt": "2022-07-10T10:45:21.600Z",
                "updatedAt": "2022-07-10T10:45:24.818Z",
                "publishedAt": "2022-07-10T10:45:24.817Z",
                "slug": "DT-01-01"
            }
        },
        {
            "id": 4, "attributes": {
                "name": "crane",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/crane.glb",
                "imgurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/crane.png",
                'image': '/pictureModel/picture4.png',
                "createdAt": "2022-07-10T10:45:54.319Z",
                "updatedAt": "2022-07-10T10:45:54.644Z",
                "publishedAt": "2022-07-10T10:45:54.642Z",
                "slug": "DT-02-01"
            }
        }
        ,
        {
            "id": 5, "attributes": {
                "name": "firstSteel",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/firstSteel.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/firstSteel.png",
                'image': '/pictureModel/picture5.png',
                "createdAt": "2022-07-10T10:46:19.821Z",
                "updatedAt": "2022-07-10T11:24:52.813Z",
                "publishedAt": "2022-07-10T10:46:20.673Z",
                "slug": "DT-02-02"
            }
        },
        {
            "id": 6, "attributes": {
                "name": "motor",
                "modelurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/motor.gltf",
                "imgurn": "https://study-fiber.oss-cn-shanghai.aliyuncs.com/motor.png",
                'image': '/pictureModel/picture6.png',
                "createdAt": "2022-07-10T10:46:55.378Z",
                "updatedAt": "2022-07-10T10:46:55.981Z",
                "publishedAt": "2022-07-10T10:46:55.979Z",
                "slug": "DT-02-03"
            }
        },
        {
            "id": 7, "attributes": {
                "name": "rollShaft",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/rollShaft.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/rollShaft.png",
                'image': '/pictureModel/picture8.png',
                "createdAt": "2022-07-10T10:47:27.514Z",
                "updatedAt": "2022-07-10T10:48:20.462Z",
                "publishedAt": "2022-07-10T10:47:28.112Z",
                "slug": "DT-00-03"
            }
        },
        {
            "id": 8, "attributes": {
                "name": "spinningMachine",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/spinningMachine.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/spinningMachine.png",
                'image': '/pictureModel/picture8.png',
                "createdAt": "2022-07-10T10:48:06.438Z",
                "updatedAt": "2022-07-10T10:48:06.957Z",
                "publishedAt": "2022-07-10T10:48:06.955Z",
                "slug": "DT-00-04"
            }
        },
        {
            "id": 9, "attributes": {
                "name": "spinningMachine2",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/spinningMachine2.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/spinningMachine2.png",
                'image': '/pictureModel/picture9.png',
                "createdAt": "2022-07-10T10:48:58.406Z",
                "updatedAt": "2022-07-10T10:48:58.937Z",
                "publishedAt": "2022-07-10T10:48:58.935Z",
                "slug": "DT-00-05"
            }
        },
        {
            "id": 10, "attributes": {
                "name": "workshop01",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/workshop01.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/workshop01.png",
                'image': '/pictureModel/picture10.png',
                "createdAt": "2022-07-10T10:49:21.778Z",
                "updatedAt": "2022-07-10T10:49:22.588Z",
                "publishedAt": "2022-07-10T10:49:22.587Z",
                "slug": "DT-02-02"
            }
        },
        {
            "id": 11, "attributes": {
                "name": "workshop02",
                "modelurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/workshop02.glb",
                "imgurn": " https://study-fiber.oss-cn-shanghai.aliyuncs.com/workshop02.png",
                'image': '/pictureModel/picture11.png',
                "createdAt": "2022-07-10T10:49:48.711Z",
                "updatedAt": "2022-07-10T10:49:49.411Z",
                "publishedAt": "2022-07-10T10:49:49.410Z",
                "slug": "DT-02-03"
            }
        }
    ],
    "meta": { "pagination": { "page": 1, "pageSize": 25, "pageCount": 1, "total": 11 } }
}

export default data;