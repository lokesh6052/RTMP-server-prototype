FROM tiangolo/nginx-rtmp

# Create the /tmp/hls directory
RUN mkdir -p /tmp/hls

# Copy your custom nginx configuration to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Set permissions for the /tmp/hls directory
RUN chmod -R 777 /tmp/hls

# Expose necessary ports
EXPOSE 8080 1935

# Start Nginx server with RTMP support
CMD ["nginx", "-g", "daemon off;"]