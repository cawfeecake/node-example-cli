install:
	npm install && npm link
.PHONY: install
# installs the CLI app to dir. $(npm prefix -g) where
# then in-dev. code can be called w/ `example`

install-all: clean-all
	npm install && npm link
.PHONY: install-all

clean:
	rm -rf node_modules/
.PHONY: clean

clean-all: clean
	rm package-lock.json
.PHONY: clean-all

DOCKER := podman
DOCKER_IMAGE_NAME := my-cli-app

build:
	$(DOCKER) build -t $(DOCKER_IMAGE_NAME) .
.PHONY: build

# TODO is there any way to pass the args (e.g. --version) thru
# to the target?
run:
	$(DOCKER) run $(DOCKER_IMAGE_NAME) --help
.PHONY: run 
