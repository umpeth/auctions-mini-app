FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bullseye

# Prepare firefox policy
RUN mkdir -p /etc/firefox/policies
COPY ff_policy.json /etc/firefox/policies/policies.json

# Install Firefox ESR
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get install -y firefox-esr
