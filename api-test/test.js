{
	"info": {
		"_postman_id": "dec69cca-f8d3-4ff1-96bb-9880152d8977",
		"name": "test-1",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23857014"
	},
	"item": [
		{
			"name": "https://pixabay.com/api/?key=11309057-e6f7045464583f20da62be5ba&q=yellow+flowers&image_type=phot",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"pm.test(\"Response time is less than 200ms\", function () {\r",
							"    pm.expect(pm.response.responseTime).to.be.below(900);\r",
							"pm.test(\"Content-Type is present\", function () {\r",
							"    pm.response.to.have.header(\"Content-Type\");\r",
							"});\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://pixabay.com/api/?key=11309057-e6f7045464583f20da62be5ba&q=yellow+flowers&image_type=phot",
					"protocol": "https",
					"host": [
						"pixabay",
						"com"
					],
					"path": [
						"api",
						""
					],
					"query": [
						{
							"key": "key",
							"value": "11309057-e6f7045464583f20da62be5ba"
						},
						{
							"key": "q",
							"value": "yellow+flowers"
						},
						{
							"key": "image_type",
							"value": "phot"
						}
					]
				}
			},
			"response": []
		}
	]
}