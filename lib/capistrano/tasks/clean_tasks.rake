namespace :cleaning do
  desc 'run cleaning folder tasks'
  task :clean_folders do
    on roles(:app) do
      now = Time.now.to_i
      execute("mkdir -p ~/tmp")
      execute("mv ~/apps/vuedemo/current/dist ~/tmp/#{now}")
      execute("rm -rf ~/apps/vuedemo/current/*")
      execute("mv ~/tmp/#{now}/* ~/apps/vuedemo/current")
    end
  end
end