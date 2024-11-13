# 📡 RTMP Server from Scratch – The Backbone of Live Streaming

This project is a **step-by-step guide** for creating your own RTMP server from scratch, designed to serve as the backbone of a high-quality, scalable live streaming setup. In this guide, you’ll learn how to set up and configure an RTMP server using **NGINX with RTMP Modules + HLS**, **OBS Studio** for video encryption, and **Azure Container Registry (ACR)** and **Azure Container Instances (ACI)** for deploying a cloud-hosted solution.

---

## 🚀 Project Overview

**Tech Stack:**
- **NGINX with RTMP Modules + HLS**: For live streaming support and HTTP Live Streaming (HLS) output
- **OBS Studio**: For encrypting and broadcasting your live video feed
- **Azure Container Registry (ACR)**: For storing Docker images in the cloud
- **Azure Container Instances (ACI)**: For deploying and running RTMP server images

### Project Workflow
1. **OBS Studio**: Streams video to your RTMP server with a specified stream key.
2. **RTMP Server**: Receives the stream and broadcasts it as an HLS stream.
3. **VLC Media Player**: Connects to the HTTP stream from the RTMP server to display the live video.

### Workflow Screenshot
![image](https://github.com/user-attachments/assets/895da517-b701-4e8b-aea5-90974d1f8dce)

---

## 🛠️ How to Build and Test the RTMP Server Locally

### Step 1: Set Up Docker
1. **Install Docker Desktop** on your system and ensure Docker Engine is running.
2. Clone this repository and navigate to the project directory.

### Step 2: Build the Docker Image
Run the following command to build the image from the Dockerfile:
```bash
docker build -t <Registry name>.azurecr.io/<image name>:<tag> .
```
This will create a Docker image ready for deployment on Azure.

### Step 3: Run the RTMP Server Locally
To test the RTMP server locally, run the following command:
```bash
docker run -d -p 8080:8080 -p 1935:1935 --name <container name> <image name>:<tag>
```

---

## ☁️ Deploying the RTMP Server on Azure

1. **Push the Docker Image** to Azure Container Registry (ACR):
   ```bash
   docker push <Registry name>.azurecr.io/<image name>:<tag>
   ```

2. **Create a Container Instance (ACI)**: 

---

## 📈 Streaming Workflow with OBS Studio and VLC Media Player

1. **Configure OBS Studio:**
   - Open OBS Studio, go to **Settings > Stream**.
   - Set **Stream Type** to Custom and enter:
     - **Server**: `rtmp://<your_container_address>`
     - **Stream Key**: `<stream_key>`
   - Click **Start Streaming** to begin.

2. **Streaming to RTMP Server:**
   - OBS will send the stream to your RTMP server.

3. **Viewing the Stream on VLC:**
   - Open VLC Media Player, go to **Media > Open Network Stream**.
   - Enter the URL: `http://<your_container_address>/live/stream.m3u8`.
   - Click **Play** to view the live stream.

---

## 📄 License
This project is licensed under the MIT License.

---

**Enjoy building your own streaming backbone!** Don't forget to ⭐️ the repo if you found it helpful and subscribe on [Marwadi Developer](https://youtube.com/@marwadideveloper?si=QphD9_IMctDqAKij) for more tutorials on live streaming, cloud deployment, and advanced web setups!
