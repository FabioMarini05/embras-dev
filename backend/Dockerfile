FROM ruby:3.2.4
RUN apt-get update -y && apt-get install -y nodejs postgresql-client
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
