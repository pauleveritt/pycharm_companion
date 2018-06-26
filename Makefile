help:
	@echo "Usage:"
	@echo "    make help        show this message"
	@echo "    make setup       create virtual environment and install dependencies"
	@echo "    make activate    enter virtual environment"
	@echo "    make deploy      deploy the docs to GHP"
	@echo "    exit             leave virtual environment"

setup:
	pip install pipenv
	pipenv install --dev --three


activate:
	pipenv shell -c

deploy:
	set -e
	pipenv install doctr
	cd docs
	pipenv run -- sphinx-build -E -b html . _build
	cd ..
	pipenv run -- doctr deploy . --built-docs docs/_build/html

.PHONY: help activate deploy