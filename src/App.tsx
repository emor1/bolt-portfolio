import React from 'react';
import { Github, Mail, FileText, Menu } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  Modal,
  Paper,
  Chip,
  Stack
} from '@mui/material';

// プロジェクトデータ
const projects = [
  {
    id: 1,
    title: 'ECサイト開発',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Next.js と Supabase を使用したモダンなECサイトの開発。商品管理、決済機能、在庫管理システムを実装。',
    longDescription: `# プロジェクトの詳細
      
## 主な機能
- 商品カタログ表示
- ユーザー認証
- カート機能
- 決済処理（Stripe連携）
- 在庫管理システム
      
## 技術スタック
- フロントエンド: Next.js, TypeScript
- バックエンド: Supabase
- データベース: PostgreSQL
- 決済: Stripe API
      
## 成果
- 注文処理時間を50%削減
- カート放棄率を30%改善
- モバイルコンバージョン率を25%向上`,
    tags: ['Next.js', 'Supabase', 'Stripe']
  },
  {
    id: 2,
    title: 'プロジェクト管理ツール',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    description: 'React と Node.js を使用したプロジェクト管理ツールの開発。タスク管理、進捗管理、チーム連携機能を実装。',
    longDescription: `# プロジェクト管理ツールの詳細
      
## 主な機能
- タスク管理
- ガントチャート
- チームコラボレーション
- リアルタイム更新
      
## 技術スタック
- フロントエンド: React, TypeScript
- バックエンド: Node.js, Express
- データベース: PostgreSQL
- WebSocket通信
      
## 成果
- チーム生産性が35%向上
- プロジェクト完了時間を40%短縮
- コミュニケーションコストを60%削減`,
    tags: ['React', 'Node.js', 'PostgreSQL']
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="fixed" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Portfolio
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <Button href="#about" color="inherit">About</Button>
              <Button href="#skills" color="inherit">Skills</Button>
              <Button href="#projects" color="inherit">Projects</Button>
              <Button href="#contact" color="inherit">Contact</Button>
            </Box>
            <IconButton
              sx={{ display: { md: 'none' } }}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {['About', 'Skills', 'Projects', 'Contact'].map((text) => (
            <ListItem 
              button 
              key={text}
              component="a"
              href={`#${text.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 10,
          textAlign: 'center',
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            sx={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              mb: 4,
              objectFit: 'cover',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            山田 太郎
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            フルスタックデベロッパー
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton color="inherit" href="#" size="large">
              <Github size={24} />
            </IconButton>
            <IconButton color="inherit" href="#" size="large">
              <Mail size={24} />
            </IconButton>
            <IconButton color="inherit" href="#" size="large">
              <FileText size={24} />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
            私は5年以上のWeb開発経験を持つフルスタックデベロッパーです。
            モダンなフロントエンド技術とバックエンド開発の両方に精通しており、
            効率的で拡張性の高いアプリケーションの開発に情熱を注いでいます。
          </Typography>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Skills
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card elevation={0} sx={{ height: '100%', bgcolor: '#f8f9fa', border: '1px solid #eee' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>フロントエンド</Typography>
                  <List>
                    {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'].map((skill) => (
                      <ListItem key={skill} sx={{ px: 0 }}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={0} sx={{ height: '100%', bgcolor: '#f8f9fa', border: '1px solid #eee' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>バックエンド</Typography>
                  <List>
                    {['Node.js', 'Python', 'PostgreSQL', 'REST API'].map((skill) => (
                      <ListItem key={skill} sx={{ px: 0 }}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={0} sx={{ height: '100%', bgcolor: '#f8f9fa', border: '1px solid #eee' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>その他</Typography>
                  <List>
                    {['Git', 'Docker', 'AWS', 'Agile / Scrum'].map((skill) => (
                      <ListItem key={skill} sx={{ px: 0 }}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    border: '1px solid #eee',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      objectFit: 'cover',
                      width: '80%',
                      margin: '0 auto'
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {project.tags.map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          sx={{ 
                            bgcolor: '#e3f2fd',
                            color: '#1976d2',
                            fontWeight: 500
                          }} 
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Project Modal */}
      <Modal
        open={selectedProject !== null}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Paper
          sx={{
            maxWidth: 900,
            maxHeight: '90vh',
            overflow: 'auto',
            p: { xs: 3, md: 5 },
            outline: 'none',
            borderRadius: 2
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject && (
            <>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                {selectedProject.title}
              </Typography>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: '80%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 4,
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <Box sx={{
                '& h1': {
                  fontSize: '2rem',
                  fontWeight: 700,
                  mb: 3,
                  mt: 4
                },
                '& h2': {
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  mb: 2,
                  mt: 3
                },
                '& ul': {
                  pl: 3,
                  mb: 2
                },
                '& li': {
                  mb: 1
                }
              }}>
                <ReactMarkdown>{selectedProject.longDescription}</ReactMarkdown>
              </Box>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 4 }}>
                {selectedProject.tags.map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    sx={{ 
                      bgcolor: '#e3f2fd',
                      color: '#1976d2',
                      fontWeight: 500
                    }} 
                  />
                ))}
              </Stack>
            </>
          )}
        </Paper>
      </Modal>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            Contact
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="お名前"
                  variant="outlined"
                  sx={{ bgcolor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  type="email"
                  variant="outlined"
                  sx={{ bgcolor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="message"
                  label="メッセージ"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{ bgcolor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ 
                    py: 2,
                    bgcolor: '#1976d2',
                    '&:hover': {
                      bgcolor: '#1565c0'
                    }
                  }}
                >
                  送信する
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#1976d2', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Typography textAlign="center">
            © 2024 Portfolio. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;